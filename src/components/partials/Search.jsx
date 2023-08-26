import lupa from "../../assets/lupa.png";
import React from "react";
import { useSearchContext } from "../context/SearchContext";
import {  useNavigate } from 'react-router-dom';


const Search = () => {
    const { valueSearch, onInputChange, onResetForm  } =
    useSearchContext();
    const navigate = useNavigate();
    const onSearchSubmit = e => {
		e.preventDefault();
		navigate("/search", {
			state: valueSearch,
		});

		onResetForm();
	};

  return (
    <>
    <form onSubmit={onSearchSubmit} className="mx-auto max-w-[12rem] pl-0 py-5 ">
      <div action="" className="relative mx-auto w-auto text-white bg-black">
        <input autoComplete="off"
        
        name='valueSearch'
        id=''
          value={valueSearch}
          onChange={onInputChange}
          className="peer cursor-pointer relative z-10 h-10 w-10 bg-transparent pl-14 outline-none focus:w-full focus:cursor-text focus:border-b-2 focus:border-white focus:pl-[70px] focus:pr-4"
          
        />
        <div className="absolute flex justify-center active-icon inset-y-0 my-[6px] h-[1.9rem] w-[3.8rem]  border-r-2 border-b-0  border-transparent px-3.5 peer-focus:border-white ">
          <img src={lupa} alt="" />
        </div>
      </div>
    </form>
   
    </>
  );
};

export default Search;
