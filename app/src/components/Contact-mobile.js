import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.svg"
import profilLight from "../assets/ppA.png"

export default function ContactsMobile() {

    return (
        <>
        <section className='flex flex-col justify-around text-center'>
            <header className='w-full text-white bg-sky-500 border-black border-b-2'>
              <div className='text-3xl'>Younes Harrat</div>
            </header>
            <div className='text-4xl my-8'>FullStack Developper</div>

            <div className="rounded-full shadow-light w-1/3 mx-auto my-8">
              <img src={profilLight} alt="profil-pic" className='rounded-full w-full h-auto object-cover '/>
            </div>
            <div className="flex flex-col w-full justify-around">
              <div className="flex flex-col w-1/2 mx-auto mb-5 bg-sky-100 p-5 border-8 border-sky-500 rounded-t-full">
                <div className='text-xl underline pl-2'>Contacts</div>
                <div className='text-xl '>07.78.58.92.19</div>
                <div className='text-xl '>Younesharrat5896@gmail.com</div>
              </div>
              
              <div className="flex flex-col w-1/2 mx-auto mt-5 bg-sky-100 p-5 border-8 border-sky-500 rounded-b-full">
                <div className='text-xl underline pl-2'>Socials</div>
                <div className="flex flex-row justify-evenly">
                  <div className='text-xl'><a href="https://www.linkedin.com/in/younesharrat/"> <img src={linkedinIcon} alt="linkedin-icon" /></a></div>
                  <div className='text-xl'><a href="https://github.com/YounesHarrat"><img src={githubIcon} alt="github-icon" /></a></div>
                </div>
                
              </div>
            </div>
        </section>
        </>
    )
}