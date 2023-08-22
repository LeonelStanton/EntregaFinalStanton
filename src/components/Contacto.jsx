import React from 'react'

import Iframe from 'react-iframe'


const Contacto = () => {
  return (
    <div className='block relative top-24 mb-20'>
   
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/5 md:w-1/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71916.7065185084!2d-93.32410464284817!3d37.19311683063176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f745c8983f%3A0x6bfd6cb31e690da0!2sSpringfield%2C%20Misuri%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1683419246362!5m2!1ses-419!2sar"
              width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"
           />
            
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">DESCRIPCION</h2>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <p className="text-indigo-500 leading-relaxed">example@email.com</p>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TELEFONO</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-3/5 md:w-2/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 mb-1 text-3xl font-extrabold tracking-[.10em]">CONTACTO</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Para obtener una respuesta rápida, escriba directo al Whatsapp de la empresa.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
        <input type="text" id="name" name="name" className="w-full bg-white border border-gray-300 focus:border-neutral-700 focus:ring-2 focus:ring-neutral-50  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 focus:border-neutral-700 focus:ring-2 focus:ring-neutral-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Telefono</label>
        <input type="phone" id="phone" name="phone" className="w-full bg-white border border-gray-300 focus:border-neutral-700 focus:ring-2 focus:ring-neutral-50  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
        <textarea id="message" name="message" className="w-full bg-white  border border-gray-300 focus:border-neutral-700 focus:ring-2 focus:ring-neutral-50 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-neutral-900 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-600  text-lg w-1/3">ENVIAR</button>
      <p className="text-xs text-gray-500 mt-3">* Campos obligatorios</p>
    </div>
  </div>
</section>
   
    </div>
  )
}

export default Contacto