import React from 'react'

const Contact = () => {
 return (
   <div className="bg-[#f0e6a3] py-16" id="contact">
     <div className="container mx-auto px-4">
       <h2 className="text-4xl font-bold text-center text-[#3a4a3c] mb-12">Contact Me</h2>
       
       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
         <div className="flex flex-col md:flex-row">
           {/* Información de contacto */}
           <div className="bg-[#3a4a3c] text-[#f0e6a3] p-8 md:w-2/5">
             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
             
             <div className="space-y-4">
               <div className="flex items-center">
                 <div className="mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                 </div>
                 <div>
                   <p className="font-semibold">Name</p>
                   <p>Gian Luca Caravone</p>
                 </div>
               </div>
               
               <div className="flex items-center">
                 <div className="mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                 <div>
                   <p className="font-semibold">Phone</p>
                   <p>(+54) 341 214 9033</p>
                 </div>
               </div>
               
               <div className="flex items-center">
                 <div className="mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <div>
                   <p className="font-semibold">Email</p>
                   <p>gianlucacaravone55@gmail.com</p>
                 </div>
               </div>
             </div>
             
             <div className="mt-8">
               <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
               <div className="flex space-x-4">
                 {/* WhatsApp */}
                 <a 
                   href={`https://wa.me/5493412149033`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-[#f0e6a3] text-[#3a4a3c] p-2 rounded-full hover:bg-opacity-80 transition-all"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                   </svg>
                 </a>
                 
                 {/* LinkedIn */}
                 <a 
                   href="https://www.linkedin.com/in/yourprofile" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-[#f0e6a3] text-[#3a4a3c] p-2 rounded-full hover:bg-opacity-80 transition-all"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                   </svg>
                 </a>
                 
                 {/* GitHub */}
                 <a 
                   href="https://github.com/yourusername" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-[#f0e6a3] text-[#3a4a3c] p-2 rounded-full hover:bg-opacity-80 transition-all"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                   </svg>
                 </a>
               </div>
             </div>
           </div>
           
           {/* Formulario de contacto */}
           <div className="p-8 md:w-3/5">
             <h3 className="text-2xl font-bold text-[#3a4a3c] mb-6">Send me a message</h3>
             
             <form>
               <div className="mb-4">
                 <label className="block text-[#3a4a3c] text-sm font-medium mb-2" htmlFor="name">
                   Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a4a3c]"
                   placeholder="Your name"
                   required
                 />
               </div>
               
               <div className="mb-4">
                 <label className="block text-[#3a4a3c] text-sm font-medium mb-2" htmlFor="email">
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a4a3c]"
                   placeholder="your.email@example.com"
                   required
                 />
               </div>
               
               <div className="mb-6">
                 <label className="block text-[#3a4a3c] text-sm font-medium mb-2" htmlFor="message">
                   Message
                 </label>
                 <textarea
                   id="message"
                   rows="5"
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a4a3c]"
                   placeholder="What would you like to tell me?"
                   required
                 ></textarea>
               </div>
               
               <button
                 type="submit"
                 className="bg-[#3a4a3c] text-[#f0e6a3] py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
               >
                 Send Message
               </button>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}

export default Contact