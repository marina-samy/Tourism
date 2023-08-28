import React from 'react';

export default function Features() {
    const stats = [
        {
          id: "stats-1",
          title: "Professional Guides",
          para: "Guides",
          value: "19 +",
        },
        {
          id: "stats-2",
          title: "Happy Customers",
          para: "Customers",
          value: "50 k+",
        },
        {
          id: "stats-3",
          title: "Traveling Experience",
          para: "Experience",
          value: "25 +",
        },
        {
            id: "stats-4",
            title: "Tours Are Completed",
            para: "Completed",
            value: "64 +",
          },
      ];
  return (
    <section className="py-5 w-full mb-0 bg-blue-50">
    <div className='w-[85%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-8 item-center justify-center'>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-col justify-center lg:items-start items-center p-3`} >

        <h2 className="font-poppins text-blue-950 font-bold xs:text-[40.89px] md:text-4xl text-2xl
         xs:leading-[53.16px] leading-[43.16px]">
          {stat.value}
        </h2>
        <p className="font-poppins font-bold xs:text-[20.45px] text-xs 
         md:leading-[31.58px] text-blue-500 uppercase">
          {stat.para}
        </p>
        <h2 className="font-poppins font-semibold text-center lg:text-start text-wrap md:text-xl text-sm 
         md:leading-[23.16px] leading-[28.16px] text-slate-400">
          {stat.title}
        </h2>
      </div>
    ))}
    </div>
  </section>
  )
}