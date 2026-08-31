"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import PrimaryButton from "./component-ui/PrimaryButton";
import ScalingMessage from "./component-ui/ScalingMessage";
import MovingImage from "./component-ui/MovingImage";
import AnimatedNavbar from "./component-ui/AnimatedNavbar";
import TypingAnimationComp from "./component-ui/TypingAnimationComp";
import AnimatedSplitText from "./component-ui/AnimatedSplitText";
import AnimatedBoxKeyFrame from "./component-ui/AnimatedBoxKeyFrame";
import ShapeSVG from "./component-ui/ShapeSVG";
import MovingSVG from "./component-ui/MovingSVG";
import Grid from "./component-ui/Grid";
import AnimatedSVG from "./component-ui/AnimatedSVG";
import CustomSVG from "./component-ui/CustomSVG";
import HouseSVG from "./component-ui/HouseSVG";
import TextPath from "./component-ui/TextPath";
import DashArray from "./component-ui/DashArray";
import StrokeAnimation from "./component-ui/StrokeAnimation";
import OtwomoSVG from "./component-ui/OtwomoSVG";
import JumpingWormSVG from "./component-ui/JumpingWormSVG";
import ClipPathTransition from "./component-ui/ClipPathTransition";
import TextMaskSVG from "./component-ui/TextMaskSVG";
import SpotlightSVG from "./component-ui/SpotlightSVG";
import MarioHatSVG from "./component-ui/MarioHatSVG";
import BlockSVG from "./component-ui/BlockSVG";
import FishLens from "./component-ui/FishLens";
import FlagFilter from "./component-ui/FlagFilter";
import PixelHouseFilter from "./component-ui/PixelHouseFilter";
import ShapeLiquidSVG from "./component-ui/ShapeLiquidSVG";
import GoeyBoxSVG from "./component-ui/GoeyBoxSVG";
import GoeyText from "./component-ui/GoeyText";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to(".title-container", {
  //       gap: "30px",
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "back.inOut",
  //     });
  //     gsap.to(".name-title", {
  //       y: -20,
  //       rotate: 15,
  //       repeat: -1,
  //       yoyo: true,
  //       delay: 0.5,
  //     });
  //   },
  //   { scope: container },
  // );

  return (
    <main ref={container}>
      {/* <div className="flex justify-center bg-lime-600">
        <div className="title-container bg-amber-300 w-fit h-40 flex flex-row text-5xl justify-center items-center p-5">
          <p className="font-serif name-title relative ">Z</p>
          <p className="font-serif name-title relative ">Y</p>
          <p className="font-serif name-title relative">R</p>
          <p className="font-serif name-title relative">U</p>
          <p className="font-serif name-title relative">S</p>
        </div>
      </div>
      <PrimaryButton />
      <ScalingMessage />
      <MovingImage />
      <AnimatedNavbar />
      <TypingAnimationComp />
      <AnimatedSplitText />
      <AnimatedBoxKeyFrame />
      <ShapeSVG />
      <MovingSVG />
      <Grid />
      <AnimatedSVG />
      <CustomSVG />
      <HouseSVG />
      <TextPath />
      <DashArray />
      <StrokeAnimation />
      <OtwomoSVG />
      <JumpingWormSVG /> */}
      <ClipPathTransition />
      <TextMaskSVG />
      <SpotlightSVG />
      <MarioHatSVG />
      <BlockSVG />
      <FishLens />
      <FlagFilter />
      <PixelHouseFilter />
      <ShapeLiquidSVG />
      <GoeyBoxSVG />
      <GoeyText />
    </main>
  );
}
