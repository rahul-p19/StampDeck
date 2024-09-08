 

  function Contact() {
 

  return (
     <div className="h-screen max-w-full bg-background"  id="contact">
      
      

      <div className="w-full  grid place-items-center">
     
        <div className="mt-6 bg-secondary rounded-xl place-items-center w-3/7">
          <div className="p-10">

            <form action="#" method="POST">
              <div className="grid grid-cols-1 p-10">
   <div className="text-center pt-0 pb-10 ">
        <h2 className="text-6xl font-bold   leading-tight text-primary">CONTACT</h2>

      </div>

                <div className="name">
                  <div className="mt-2.5 ">
                    <input type="text" name="" id="" placeholder="Your Name"
                      className="w-full px-4 py-4 text-text placeholder-text border 
                    rounded-md foucus:border-secondary-600" rows="2"/>
                    
                  </div>

                  
                </div>

                <div className="email">
                  <div className="mt-2.5 ">
                    <input type="text" name="" id="" placeholder="Your Email ID"
                      className="w-full px-4 py-4 text-text placeholder-text border 
                    rounded-md foucus:border-secondary-600" rows="2"/>
                    
                  </div>

                  <div className="feedback">
                    <div className="mt-2.5">
                      <textarea name="" placeholder="Send a Message" className="w-full px-4 py-4
                       text-text placeholder-text border 
                    rounded-md foucus:border-secondary-600" rows="4" >

                      </textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button type="submit" className="text-xl w-3/4 p-4 mt-2 font-semibold text-white
                    bg-accent rounded-xl">
                      Submit
                    </button>
                  </div>
                  
                </div>
              </div>

            </form>

          </div>
       </div>

      </div>
    </div>
  )
}

export default Contact