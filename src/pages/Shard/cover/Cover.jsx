import { Parallax } from 'react-parallax';


const Cover = ({ img, title }) => {
    return (

        // <Parallax
        //     blur={{ min: -25, max: 25 }}
        //     bgImage={img}
        //     bgImageAlt="the menu"
        //     strength={-200}
        // >
        //     <div className="hero h-[700px]">
        //         <div className="hero-overlay bg-opacity-60"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div className="max-w-md">
        //                 <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
        //                 <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             </div>
        //         </div>
        //     </div>
        // </Parallax>

        <Parallax
            bgImage={img}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(0, 25, 0,0.5, ${percentage * 1})`,
                        right: '0',
                        top: '0',
                        left:'0',
                        bottom:'50%',
                        width: percentage * 1000,
                        height: percentage * 1000,
                    }}
                />
            )}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;