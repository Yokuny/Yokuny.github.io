
export default function Forms() {
    return (
        <form className="w-60 flex justify-center flex-col bg-gray-800 rounded">
            <fieldset className="px-3 py-4">
                <label className="pl-2 text-sm text-green-700 hover:text-green-600" for="formName">Name</label>
                <br className="mb-1"/>
                <input className="px-1 w-52 text-sm leading-7 bg-gray-900 focus:bg-gray-800 duration-500 text-gray-600 rounded" id="formName" type="text" name="formName" placeholder="type your full name" />
                <br className="mb-4"/>
                <label className="pl-2 text-sm text-green-700 hover:text-green-600" for="formEmail">Email</label>
                <br className="mb-1"/>
                <input className="px-1 w-52 text-sm leading-7 bg-gray-900 focus:bg-gray-800 duration-500 text-gray-600 rounded" id="formEmail" type="text" name="formEmail" />
                <br className="mb-4"/>
                <label className="pl-2 text-sm text-green-700 hover:text-green-600" for="formMessage">Message</label>
                <br className="mb-1"/>
                <textarea className="px-1 w-52 text-sm bg-gray-900 focus:bg-gray-800 text-gray-600 duration-500 rounded" id="formMessage" type="text" name="formMessage" cols="24" rows="10"></textarea>
                <br className="mb-4"/>
                <div className="flex justify-center">
                    <button className="w-16 bg-fuchsia-300 hover:bg-green-700 text-gray-900 duration-500 rounded" type="submit">send</button>
                </div>
            </fieldset>
        </form>
    );
};