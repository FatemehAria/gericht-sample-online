import HeroButton from "@/components/HeroButton";
import Select from "@/components/Select";
import TitlesAndSubs from "@/components/TitlesAndSubs";
import React from "react";

function TableReservation() {
  return (
    <div className="p-[5%]">
      <div className="border border-[#DCCA87] p-5 flex flex-col gap-16">
        <TitlesAndSubs title="Reservations" sub="Book A Table" />
        <div className="grid grid-cols-1 lg:flex lg:flex-row gap-3 w-full">
          <Select options={["1", "2", "3"]} />
          <Select options={["2021/12/5", "One", "Two"]} />
          <Select options={["11 AM", "One", "Two"]} />
        </div>
        <div className="flex flex-row justify-center">
          <HeroButton ButtonText="Book Now" />
        </div>
      </div>
    </div>
  );
}

export default TableReservation;
