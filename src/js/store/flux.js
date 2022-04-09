const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: [],
    },
    actions: {
      getData: () => {
        fetch(
          "https://assets.breatheco.de/apis/fake/todos/user/odettelittle",
          {
            method: "GET",
            redirect: "follow",
          }
        )
          .then((response) => response.json())
          .then((result) => setStore({ list: result }))
          .catch((error) => console.log("error", error));
      },

      addItem: (item) => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/odettelittle", {
          method: "PUT",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            ...getStore().list,
            { label: item, done: false },
          ]),
        })
          .then((response) =>
            response.status === 200 ? getActions().getData() : ""
          )
          .catch((error) => console.log("error", error));
      },
	  deleteItem: (list) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		var raw = JSON.stringify(list);
		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/odettelittle",
			requestOptions
		)
			.then((response) =>
				response.status === 200 ? setStore({list:list}) : ""
			)
			.catch((error) => console.log("error", error));
	  }
    },
  };
};

export default getState;
