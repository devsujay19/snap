"use client";

export default function SubTitle() {
    return (
        <>
            <p className="text-center"><a target="_blank" className="text-blue-400 hover:underline cursor-pointer" onClick={() => {
                window.open("https://github.com/devsujay19/", "_blank");
            }}>Sujay</a>&apos;s personal image hosting platform</p>
        </>
    );
};