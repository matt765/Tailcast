import { AmazonLogo } from "../assets/icons/AmazonLogo";
import { DropboxLogo } from "../assets/icons/DropboxLogo";
import { NetflixLogo } from "../assets/icons/NetflixLogo";
import { SlackLogo } from "../assets/icons/SlackLogo";
import { SpotifyLogo } from "../assets/icons/SpotifyLogo";
import { StripeLogo } from "../assets/icons/StripeLogo";

export const Logos = () => {
  return (
    <section class="w-full flex flex-col justify-center  items-center  bg-customDarkBg1 h-40">
      {/* <div class="w-full text-center text-xl text-[rgb(174,178,183)] mb-16">Already loved and trusted by product teams</div> */}
      <div class="flex w-4/5 space-between">
        <div class="w-full flex justify-center">
          <div class="py-4">
            <AmazonLogo />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="py-4">
            <DropboxLogo />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="py-4">
            <NetflixLogo />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="py-4">
            <SlackLogo />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="py-4">
            <SpotifyLogo />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="py-4">
            <StripeLogo />
          </div>
        </div>
      </div>
    </section>
  );
};
