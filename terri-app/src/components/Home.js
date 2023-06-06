import React from 'react';
import profileImage from '../images/photoself.jpeg';

const Home = () => {
  return (
    <div id="home" name="homepage" className="w-full h-screen bg-gradient-to-tl from-zinc-50 via-red-200 to-rose-900">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center">
          <div>
            <h1 className="text-xl sm:text-7xl font-bold text-white">
              Terri Mack
            </h1>
            <h2 className="text-3xl sm:text-7xl font-bold ">
              Growing Full Stack Web Developer.
            </h2>
            <p className="py-5 max-w-[750px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>

              <div class="button" id="project-btn">
                <div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
                <a href="#">See my Work</a>
              </div>

            </div>
          </div>
          <div className="rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;