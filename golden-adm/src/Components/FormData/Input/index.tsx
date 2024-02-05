import React, { useState } from "react";

export const GenericField = ({ field, placeholder, label, ...props }: any) => (
  <div className="flex flex-col font-[500] text-cinza_azulado">
    <p>{label}</p>
    <input
      {...field}
      {...props}
      type="text"
      placeholder={placeholder}
      className="h-[50px] border-[0.5px] border-cinza_azulado rounded-md text-cinza_azulado placeholder-cinza_azulado px-4"
    ></input>
  </div>
);

export const GenericPasswordField = ({
  field,
  placeholder,
  label,
  ...props
}: any) => (
  <div className="flex flex-col font-[500] text-cinza_azulado">
    <p>{label}</p>
    <input
      {...field}
      {...props}
      type="password"
      placeholder={placeholder}
      className="h-[50px] border-[0.5px] border-cinza_azulado rounded-md text-cinza_azulado px-4"
    ></input>
  </div>
);

export const GenericFieldSmall = ({
  field,
  placeholder,
  label,
  ...props
}: any) => (
  <div className="flex flex-col text-base not-italic font-medium leading-[normal] text-cinza">
    <p>{label}</p>
    <input
      {...field}
      {...props}
      type="text"
      placeholder={placeholder}
      className="h-[44px] border-[0.5px] w-[153px] rounded-[10px] border-cinza text-cinza_azulado px-4"
    ></input>
  </div>
);

export const GenericPerfil = ({
  field,
  placeholder,
  label,
  width,
  ...props
}: any) => (
  <div className="flex flex-col text-[18px] font-[500] text-[#4F4F4F]">
    <p>{label}</p>
    <input
      {...field}
      {...props}
      type="text"
      placeholder={placeholder}
      className={`h-[46px] flex items-center  border-[1px] rounded-[10px] border-solid border-[#BDBDBD]
			bg-[#fdfdfd] text-cinza_azulado px-4 ${width} placeholder-[#4F4F4F] text-xl not-italic font-medium leading-[normal]`}
    ></input>
  </div>
);
