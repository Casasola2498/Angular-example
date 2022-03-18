import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})



export class MainPageComponent implements OnInit {
  photoFactors = [
    {
      factor: "1. Illumination",
      bodyText: " The time of day is of maximum importance when you want to take automotive photographs. The professional photographers tend to feature cars when the sun is barely visible, preferably a few minutes after sunset or before sunrise, this is called \"The Golden Hour\". The golden sun glow bounces off all surfaces, giving the photo a glamorous vibe. Natural light also reduces post-processing time, making your work more authentic! \r\n\r\n In the cases of artificial light, search the perfect angle where it doesn't reflects directly in the camera lens and try to give a nice glow of the lights in the paint of your car.",
      image: "ratlook.jpg"
    },
    {
      factor: "2. Perspective",
      bodyText: "Regardless of the camera you use, if you want fresh and unique photos, you will have to go beyond just looking. Once you have a few good images with the classic angles (front, back and side), try changing the point of view. Whether it's shots from a low-angle shot or an high-angle shot, it changes the perspective and the message you transmit.",
      image: "kombi.jpg"
    },
    {
      factor: "3. Environment",
      bodyText: "Getting a nice shot of a car if not easy because they are objects of big dimensions. You need to find a place where the car will stand out over the background. Try to find the perfect spot! It's not the same to take a photo of your car in a place with a lot of other cars, people or buildings, than to take a photo of your car in an empty space, building, garage, or in the nature, where you can isolate it, and make it stand out.",
      image: "beetle.jpg"
    },
    {
      factor: "4. Details",
      bodyText: "Let your creativity guide you, experience new angles where you can highlight the unique characteristics of each car you are going to photograph. Each of them has its own details that can lead you to get that much desired photograph.",
      image: "vanagon.jpg"
    },
    {
      factor: "5. RAW shots",
      bodyText: "If you take photos in RAW, these small extra adjustments will allow you to preserve the maximum quality of the pictures. \r\n\r\nRAW allows small adjustments of light, saturation, sharpness, contraste, and others, without affecting the quality of your photos. \r\n\r\nThe images that are saved in RAW store all available information without processing, which means that all processing decisions are yours, but this format consumes a lot more memory. Keep that in mind!",
      image: "golf.jpg"
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
