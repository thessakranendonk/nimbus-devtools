const { ExperimentManager } = ChromeUtils.import(
  "resource://nimbus/lib/ExperimentManager.sys.mjs"
);

export interface EnrollProps {
  title: string;
}

// type to be changed
const onSubmit: EventListener = (recipe) => {
  if (recipe) {
    ExperimentManager.enroll(recipe, "nimbus-devtools");
  }
};

const Enroll: React.FC = ({ title }: EnrollProps) => {
  return (
    <div className="flex items-start space-x-4 max-w-6xl">
      <div className="min-w-0 flex-1">
        <h1 className="pb-3.5 px-3 text-xl text-gray-800">
          Enroll your {title} here!
        </h1>
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your Experiment JSON...
            </label>
            <textarea
              rows={10}
              name="text"
              id="text"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Add your Experiment JSON..."
              defaultValue={""}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center"></div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => onSubmit}
              >
                Enroll
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
