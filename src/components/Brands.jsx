import { AmazonLogo } from "../assets/icons/AmazonLogo";
import { DropboxLogo } from "../assets/icons/DropboxLogo";
import { NetflixLogo } from "../assets/icons/NetflixLogo";
import { SlackLogo } from "../assets/icons/SlackLogo";
import { SpotifyLogo } from "../assets/icons/SpotifyLogo";
import { StripeLogo } from "../assets/icons/StripeLogo";

export const Brands = () => (
  <section class="py-32 bg-customDarkBg1 custom-border-gray w-full mt-16 mb-16">
    <div class="container px-4 mx-auto w-3/5">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <div class="max-w-md">
            <h2 class="mb-10 custom-block-big-title">
              Trusted by brands all over the world
            </h2>
            <p class="custom-content-subtitle ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="flex flex-wrap -m-4">
            <div class="w-1/2 md:w-1/3 p-4">
              <div class="py-4 lg:py-8">
                <AmazonLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 p-4">
              <div class="py-4 lg:py-8">
                <DropboxLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 p-4">
              <div class="py-4 lg:py-8">
                <NetflixLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 p-4">
              <div class="py-4 lg:py-8">
                <SlackLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 p-4">
              <div class="py-4 lg:py-8">
                <SpotifyLogo />
              </div>
            </div>
            <div class="w-1/2 md:w-1/3 p-4">
              <div class="py-4 lg:py-8">
                <StripeLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
