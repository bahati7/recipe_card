import React from "react";
import { assets, header, ingredients, instructions } from "./assets/assets";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-5">
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow sm:max-w-xl">
        <img
          className="object-cover sm:p-5 sm:w-full sm:h-auto w-auto rounded-none sm:rounded-lg"
          src={assets.image_omelette}
          alt="omelette"
        />
        <div className="pl-5">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-Stone900">
            {header.title}
          </h5>
          <p className="mb-3 text-xs font-thin ">{header.content}</p>
        </div>

        <div className="p-5 bg-Rose50 m-5 ">
          <h6 className="mb-2 text-sm font-medium tracking-tight text-Rose800">
            Preparation time
          </h6>
          <ul className="mb-3 text-md font-thin ">
            <li className="pt-3 pl-6 ml-6 list-disc marker:text-Rose800 ">
              <span className="font-bold text-Stone600">Total: </span>
              Approximately 10 minutes
            </li>
            <li className="pt-3 pl-6 ml-6 list-disc marker:text-Rose800 ">
              <span className="font-bold text-Stone600">Preparation: </span> 5
              minutes
            </li>
            <li className="pt-3 pl-6 ml-6 list-disc marker:text-Rose800 ">
              <span className="font-bold text-Stone600">Cooking: </span>5
              minutes
            </li>
          </ul>
        </div>

        <div className="pl-5 ">
          <h6 className="mb-2 font-young text-4xl font-medium tracking-tight text-Brown800">
            Ingredients
          </h6>
          <ul className="text-md font-thin ">
            {ingredients.map((item, index) => (
              <li
                key={index}
                className="pt-3 pl-6 ml-6 list-disc text-Stone600 font-medium marker:text-Brown800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <hr className="ml-5 mr-5 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="pl-5 pr-5 ">
          <h6 className="mb-2 font-young text-4xl font-medium tracking-tight text-Brown800">
            Instructions
          </h6>
          <ol className="text-md font-thin ">
            {instructions.map((item, index) => (
              <li
                key={index}
                className="pt-3 pl-6 ml-6 list-decimal text-Stone600 font-medium marker:text-Brown800"
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
        <hr className="ml-5 mr-5 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="pl-5 pr-5 ">
          <h6 className="mb-2 font-young text-4xl font-medium tracking-tight text-Brown800">
            Nutrition
          </h6>
          <p className="text-gray-500 text-xs">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <table className="w-full m-5 text-sm text-left rtl:text-right text-gray-500">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Calories
                </th>
                <td className="px-6 py-4">277kcal</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Carbs
                </th>
                <td className="px-6 py-4">0g</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Protein
                </th>
                <td className="px-6 py-4">20g</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Fat
                </th>
                <td className="px-6 py-4">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
