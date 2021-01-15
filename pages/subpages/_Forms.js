import getFormData from '../../utils/getFormData';
export default function Forms() {
    return (
        <form className="lg:w-60 w-72 flex flex-col justify-center bg-gray-800 rounded" action="http://localhost:3000/saveForm" method="POST">
            <fieldset className="px-3 py-4">
                <label className="pl-2 mb-4 text-sm text-green-700 hover:text-green-600" for="formName">Name</label>
                <br />
                <input className="px-1 mb-4 w-52 text-sm leading-7 bg-gray-700 focus:bg-gray-800 duration-500 text-gray-600 rounded" id="formName" type="text" name="formName" required placeholder="type your full name" />
                <br className="mb-4"/>
                <label className="pl-2 mb-4 text-sm text-green-700 hover:text-green-600" for="formEmail">Email</label>
                <br />
                <input className="px-1 mb-4 w-52 text-sm leading-7 bg-gray-700 focus:bg-gray-800 duration-500 text-gray-600 rounded" id="formEmail" type="text" name="formEmail" required />
                <br className="mb-4"/>
                <label className="pl-2 mb-4 text-sm text-green-700 hover:text-green-600" for="formMessage">Message</label>
                <br />
                <textarea className="px-1 mb-4 lg:w-52 text-sm bg-gray-700 focus:bg-gray-800 text-gray-600 duration-500 rounded" id="formMessage" type="text" name="formMessage" cols="24" rows="10" required></textarea>
                <br />
                <div className="flex justify-center">
                    <button onClick={getFormData} className="w-16 bg-fuchsia-300 hover:bg-green-700 text-gray-900 duration-500 rounded" type="disable">send</button>
                </div>
            </fieldset>
        </form>
    );
};