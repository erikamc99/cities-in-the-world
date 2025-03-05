import React from "react";
function HeadCity() {
    return (
            <section className="relative h-[40vh]">
                <div className="headCity relative flex justify-center items-center w-full .fill-available">
                <img src="../src/assets/img/bangkok-header.png" alt="bangkok" 
                    className="relative w-full object-cover h-[20vh]" />
                <h1 className="absolute text-5xl text-white">The most Popular City</h1>
                </div>
            </section>
    )
}
export default HeadCity;