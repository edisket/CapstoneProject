import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import * as faceapi from 'face-api.js';
import { EmployeeRegistrationService } from "../service/empRegistration.service";

@Component(
    {
        selector:'image-viewer-component',
        templateUrl:'./image-viewer.component.html',
        styleUrls:['./image-viewer.component.scss']
    }
)
export class ImageViewerComponent implements OnInit, OnDestroy{




    intervalId:any = {};
    isCapturing:boolean = false;

    @ViewChild('video', { static: true })
    public video: ElementRef;


    @ViewChild('container', { static: true })
    public container: ElementRef;

    @ViewChild('videoContainer', { static: true })
    public videoContainer: ElementRef;

    videoInput: any;



    constructor(
        private renderer2:Renderer2,
        private empRegServ:EmployeeRegistrationService){}
   


    img:any = {};
    
 
    async ngOnInit() {


        await Promise.all([
        await faceapi.nets.tinyFaceDetector.loadFromUri('../../assets/models'),
        await faceapi.nets.faceLandmark68Net.loadFromUri('../../assets/models'),
        await faceapi.nets.faceRecognitionNet.loadFromUri('../../assets/models'),
        await faceapi.nets.ssdMobilenetv1.loadFromUri('../../assets/models'),]).then(() => this.startVideo());
        

        
    }

    startVideo() {
        this.videoInput = this.video.nativeElement;

        navigator.mediaDevices.getUserMedia(
            { video: {}, audio: false }).then(stream => (this.videoInput.srcObject = stream));

        this.detect_faces();

    }


    async detect_faces(){


        this.video.nativeElement.addEventListener('play', async()=>{

            const detectCanvas = await faceapi.createCanvasFromMedia(this.videoInput);
            this.videoContainer.nativeElement.appendChild(detectCanvas);


            detectCanvas.setAttribute('style', `
                position:absolute;
                top:20%;
                right:37%;
            `)

            faceapi.matchDimensions(detectCanvas, {height:500, width:500});

           this.intervalId =  setInterval(async()=>{
                
                const detection= await faceapi.detectSingleFace(this.videoInput, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor()

                if(detection){
                    const resizedDetection = faceapi.resizeResults(detection, {height:500, width:500});

                    detectCanvas.getContext('2d')?.clearRect(0,0,detectCanvas.width, detectCanvas.height);


                    await faceapi.draw.drawDetections(detectCanvas, resizedDetection);
                }
            },250)
        })
    }

    
    async CaptureImage(){

        if(!this.isCapturing){

            let canvas = this.renderer2.createElement('canvas');
        
            canvas.setAttribute('width','500px');
            canvas.setAttribute('height','500px');
            this.renderer2.appendChild(this.container.nativeElement, canvas);
            const ctx = canvas.getContext('2d');
    
            ctx.drawImage(this.video.nativeElement, 0,80, canvas.width, canvas.height/1.4);
         
            this.isCapturing = true;
            this.videoContainer.nativeElement.setAttribute('class','d-none');


            await new Promise(res=>{
                setTimeout(()=>{
                    res(canvas.toDataURL('image/png'));
                }, 3000)
            }).then(r=>{

                this.img = r;

                 this.empRegServ.model.image = this.img;

                this.videoContainer.nativeElement.setAttribute('class','');

                this.renderer2.removeChild(this.container.nativeElement, canvas);

                this.isCapturing = false;
            })

            
        }

    }


    ngOnDestroy(): void {

        clearInterval(this.intervalId);
        (<MediaStream>this.videoInput.srcObject).getTracks().forEach(stream=> stream.stop());

        this.videoInput = undefined;
         faceapi.nets.tinyFaceDetector.dispose();
         faceapi.nets.faceLandmark68Net.dispose();
         faceapi.nets.faceRecognitionNet.dispose()
         faceapi.nets.ssdMobilenetv1.dispose();

        

    }
 

}