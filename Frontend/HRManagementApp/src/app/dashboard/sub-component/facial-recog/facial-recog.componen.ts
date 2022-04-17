import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { resolve } from "dns";
import * as faceapi from 'face-api.js';
import { saveAs } from 'file-saver'



@Component({
    selector: 'facial-recog',
    templateUrl: './facial-recog.componen.html',
    styleUrls: ['./facial-recog.componen.scss']
})
export class FacialRecogComponent implements OnInit {
    WIDTH = 500;
    HEIGHT = 500;




    @ViewChild('video', { static: true })
    public video: ElementRef;
    @ViewChild('canvas', { static: true })
    public canvasRef: ElementRef;
    @ViewChild('videoContainer', { static: true })
    public videoContainer: ElementRef;

    @ViewChild('canvasMatcher', { static: true })
    public canvasMatcher: ElementRef<HTMLCanvasElement>

    @ViewChild('imageContainer', { static: true })
    public imageContainer: ElementRef<HTMLImageElement>

    constructor(private elRef: ElementRef,
        private renderer2: Renderer2) { }


    stream: any;
    detection: any;
    resizedDetections: any;
    canvas: any;
    canvasEl: any;
    displaySize: any = {
        width:this.WIDTH,
        height:this.HEIGHT
    };
    videoInput: any;
    isCapturing: boolean = false;
    imgSrc: any;
    faceMatcher:faceapi.FaceMatcher;
    faceLabelDescriptor:any[] = [];

    async ngOnInit() {
        await Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri('../../assets/models'),
        await faceapi.nets.faceLandmark68Net.loadFromUri('../../assets/models'),
        await faceapi.nets.faceRecognitionNet.loadFromUri('../../assets/models'),
        await faceapi.nets.ssdMobilenetv1.loadFromUri('../../assets/models'),]).then(() => this.startVideo());
       
        await this.loadAllImages();
    }


    startVideo() {
        this.videoInput = this.video.nativeElement;

        navigator.mediaDevices.getUserMedia(
            { video: {}, audio: false }).then(stream => (this.videoInput.srcObject = stream));

        this.detect_Faces();
    }

    async detect_Faces() {
        this.video.nativeElement.addEventListener('play', async () => {
            this.canvas = await faceapi.createCanvasFromMedia(this.videoInput);
            this.videoContainer.nativeElement.appendChild(this.canvas);
            this.canvas.setAttribute('id', 'canvass');
            this.canvas.setAttribute(
                'style', `position: absolute;
                top: 0;
                left: 0`
            );
            // this.displaySize = {
            //     width: this.videoInput.width,
            //     height: this.videoInput.height,
            // };
            faceapi.matchDimensions(this.canvas, this.displaySize);
            setInterval(async () => {
                this.detection = await faceapi.detectSingleFace(this.videoInput, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();

                if (this.detection) {
                    this.resizedDetections = faceapi.resizeResults(
                        this.detection,
                        this.displaySize
                    );
                    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
                    faceapi.draw.drawDetections(this.canvas, this.resizedDetections);
                }

            }, 100);
        });
    }


    async CaptureImage() {
        if (!this.isCapturing) {
            this.isCapturing = true;
            let canvasScreenshot = this.renderer2.createElement("canvas");

            canvasScreenshot.setAttribute('width', '500px')
            canvasScreenshot.setAttribute('height', '500px')

            canvasScreenshot.setAttribute('style', `
                position:absolute;
                top:0;
                left:0;
            `)
            this.renderer2.appendChild(this.videoContainer.nativeElement, canvasScreenshot);

            let ctx = canvasScreenshot.getContext('2d');

            ctx.drawImage(this.video.nativeElement, 0, 0, canvasScreenshot.width, canvasScreenshot.height);




            await new Promise<any>(res => {
                setTimeout(() => {
                    let image = canvasScreenshot.toDataURL('image/jpeg');
                    res(image);
                }, 3000)
            }).then(res => {
                ctx.clearRect(0, 0, canvasScreenshot.width, canvasScreenshot.height);

                this.renderer2.removeChild(this.videoContainer.nativeElement, canvasScreenshot);

                this.isCapturing = false;


                let videoElementRef = <HTMLVideoElement>this.video.nativeElement;
                console.log(videoElementRef.mediaKeys)

                saveAs(res, "sample.png");
            });


        }


    }


    OnCaptureImg() {
        this.CaptureImage();
    }


    OnFileChange(param: any) {

        if (param.target.files.length !== 0) {
            if (param.target.files[0]) {
                var fl = new FileReader();


                fl.onload = async (res:any) => {

                    // this.imgSrc = res.target?.result;
                    this.imageContainer.nativeElement.setAttribute('src', res.target?.result);


                    // let localDetection:any =  await this.detectFace(this.imageContainer, this.canvasMatcher);
                  
                    // this.faceLabelDescriptor = new faceapi.LabeledFaceDescriptors('subject', [localDetection.descriptor]);
                       
                }

                fl.readAsDataURL(param.target.files[0]);
            }
        }

    }

    async OnMatch() {
         console.log(this.faceLabelDescriptor);
         const faceMatcher = new faceapi.FaceMatcher(this.faceLabelDescriptor);
         

        
        let res = faceMatcher.findBestMatch(this.detection.descriptor);
        console.log(res.toString());

        



    }


    async detectFace(elem:ElementRef, canvasParam:ElementRef<HTMLCanvasElement>){

        let canvasRef = canvasParam.nativeElement;


        faceapi.matchDimensions(canvasRef, this.displaySize);

        let locDetection = await faceapi.detectSingleFace(elem.nativeElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();

      
        if(locDetection)
        {
            let resDetection = faceapi.resizeResults(
                locDetection,
                this.displaySize
            );

            canvasRef.getContext('2d')?.clearRect(0,0,canvasRef.width, canvasRef.height);
            faceapi.draw.drawDetections(canvasRef, resDetection);

            console.log(locDetection)
            return locDetection;
                
        }
        else
            return undefined;
        
        
    }


    async clearCanvas(canvasParam:ElementRef<HTMLCanvasElement>){

        let canvasParamRef = canvasParam.nativeElement;
        canvasParamRef.getContext('2d')?.clearRect(0,0,canvasParamRef.width, canvasParamRef.height);

    }
    
    
    async loadAllImages(){

        let labelDesc:any[] = [];

        const labels= ['Edison', 'Paula', 'Psalm'];

        await labels.map(async x=>{

            const descriptions:any[]=[];


            for(let i = 1; i <= 1; i++){
                const img = await faceapi.fetchImage(`/assets/SamplePics/${x}/${i}.png`);

                const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()

                descriptions.push(detections?.descriptor);

            }
            this.faceLabelDescriptor.push(new faceapi.LabeledFaceDescriptors(x, descriptions));
        });

     
    }

}