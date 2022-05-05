const HelpersFinder = {};
const URL = process.env.REACT_APP_URL_SERVER + "helpers/";

// fetch last 10 official exchange rate
HelpersFinder.rate = async () => {
  try {
    const response = await fetch(`${URL}rate/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.token,
      },
    });
    return await response.json();
  } catch (error) {}
};

export default HelpersFinder;
