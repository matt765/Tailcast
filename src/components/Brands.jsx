import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";

export const Brands = () => (
  <section class="py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <div class="container px-4 mx-auto w-2/3">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-1/2 px-4 lg:mb-0">
          <div class="flex flex-col">
            <h2 class="mb-2 text-6xl font-bold tracking-normal text-white">
              Trusted by brands
            </h2>
            <h2 class=" text-6xl font-bold tracking-normal text-customSecondary">
              all over the world
            </h2>
          </div>
        </div>
        <div class="w-full lg:w-1/2 pl-10">
          <div class="flex flex-wrap -m-4">
            <div class="w-1/2 md:w-1/3 py-6">
              <div class="">
                <AmazonLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3  py-6">
              <div class="">
                <DropboxLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 py-6">
              <div class="">
                <NetflixLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3  py-6">
              <div class="">
                <SlackLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 py-6">
              <div class="">
                <SpotifyLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 py-6">
              <div class="">
                <StripeLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
