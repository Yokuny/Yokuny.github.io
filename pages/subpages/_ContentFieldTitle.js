export default function ContentFieldTitle(props){
    return(
        <>
            <div className="mx-5 my-3 max-h-5 bg-orange-500">
                <h1 className="ml-2 mb-2 leading-5 text-gray-900 font-semibold tracking-wide">{props.title}</h1>
            </div>
        </>
    );
};