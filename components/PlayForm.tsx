import React from "react";

const PlayForm = () => {
  // TODO: We have name and email inputs. It should log out when we submit.

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* TODO: Validate your inputs before invoking "onSubmit" */
    <form className="text-black">
      {/* TODO: Register your input into the hook */}
      <input defaultValue="test" />

      {/* TODO: This input needs to show a required error message */}
      <input />

      {/* TODO: Who will submit the form?*/}
    </form>
  );
};

export default PlayForm;
