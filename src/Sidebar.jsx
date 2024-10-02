import React from 'react';

const Sidebar = () => {
  return (
    <div className="p-6 bg-white shadow-md w-72">
      {/* Logo */}
      <div className=" mb-6">
        <img src="https://webextheme.com/html/loxicat/images/logo-sidebar-dark.png" alt="Loxicat Logo" className="w-10 h-10" />
        
      </div>

      {/* Office Address */}
      <div className="mb-6">
        <h2 className="text-xl text-black  font-bold mb-2">Office Address</h2>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt"></i>
            <span className='text-black'>121 King Street, Australia</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-envelope text-orange-600"></i>
            <span className='text-black'>example@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <i className="fas fa-phone text-orange-600"></i>
            <span>(00) 2500-123-4567</span>
          </li>
        </ul>
      </div>

      {/* Pinterest Images */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Pintarest</h2>
        <div className="grid grid-cols-3 gap-2">
          <img src="https://webextheme.com/html/loxicat/images/side-panel/1.jpg" alt="Industrial Image 1" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/2.jpg" alt="Industrial Image 2" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/3.jpg" alt="Industrial Image 3" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/4.jpg" alt="Industrial Image 4" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/5.jpg" alt="Industrial Image 5" className="w-full h-20 object-cover" />
          <img src="https://webextheme.com/html/loxicat/images/side-panel/5.jpg" className="w-full h-20 object-cover" />
        </div>
      </div>

      {/* Social List */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Social List</h2>
        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <i className='border border-gray-600  bg-gray-600 p-2 rounded-full hover:bg-[#ff7906] '>
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
          </i>
          <i  className='border border-gray-600  bg-gray-600 p-2 rounded-full  hover:bg-[#ff7906]'>
          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>

          </i>
          <i  className='border border-gray-600  bg-gray-600 p-2 rounded-full text-white  hover:bg-[#ff7906] hover:text-white' >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
						<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
					</svg>
          </i>
          <i className='border border-gray-600  bg-gray-600 p-2 rounded-full text-white hover:bg-[#ff7906] hover:text-white ' >
        	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
