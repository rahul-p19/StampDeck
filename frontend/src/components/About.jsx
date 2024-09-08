import aboutImg from "../assets/stock.jpg";

   function About() {
     return ( 
       <div  id="about" className="h-screen">
    
   
           <h1 className="my-20 text-center pt-10 pb-0 text-6xl font-inter text-accent font-bold">ABOUT US</h1>
           <div className="flex flex-wrap">
             <div className="w-full lg:w-1/2 lg:p-1 ">
             <div className="flex items-center justify-center">
               <img className="rounded-2xl "src={ aboutImg } alt="image of a card" />

             </div>
           </div>
           <div className="w-full lg:w-1/2">
             <div className="flex justify-center lg:justify-center">
               <p className="my-2 leading-9 max-w-xl px-3  flex  text-primary text-xl font-inter font-semibold" >
                 StampDeck is more than just a website.<br></br>It is a vibrant online community dedicated to fostering a love for philately.
                 Be a part of a nationwide network of collectors, buy, sell, and trade stamps with ease, and discover a wealth of knowledge on our user-friendly platform.<br></br> By promoting philately, we contribute to the preservation of cultural heritage while also minimizing our carbon footprint. <br></br>Experience the joy of philately in a convenient, connected, and environmentally friendly way.
                 </p>
             </div>
           </div>
        </div>
         </div>
 
         
       
 );
}

 
export default About
