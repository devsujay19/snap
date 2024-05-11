import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Image from 'next/image';

// using process.cwd() to get the path
// fs.readdir to get all files in directory
export default async function GalleryUtility() {
    const imageDirectory = path.join(process.cwd(), '/public/');
    const imageFilenames = await fs.readdir(imageDirectory);
    console.log(imageFilenames);

    return (
        <div>
            <div>
                <Gallery images={imageFilenames} />
            </div>
        </div>
    );
};

const Gallery = ({ images }: { images: Array<string>; }) => {
    return (
        <div>
            {images.map((entry: string) => <Image className="w-auto h-auto mx-auto" style={{
                margin: "20px auto",
                borderRadius: "10px"
            }} width={300} height={300} alt={'Image alternative text'} src={`/${entry}`} key={entry} />)}
        </div>
    );
};