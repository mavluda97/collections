const createStringValue = async (data) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/string-values`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
      body: JSON.stringify(data),
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const createIntegerValue = async (data) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/integer-values`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
      body: JSON.stringify(data),
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const createCheckboxValue = async (data) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/checkbox-values`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
      body: JSON.stringify(data),
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getStringValues = async (itemId) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/string-values?item_id=${itemId}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getIntegerValues = async (itemId) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/integer-values?item_id=${itemId}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getCheckboxValues = async (itemId) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/checkbox-values?item_id=${itemId}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getItemStringFields = async (itemId) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/item-string-fields?itemId=${itemId}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getItemIntegerFields = async (itemId) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/item-integer-fields?itemId=${itemId}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getItemCheckboxFields = async (itemId) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/item-checkbox-fields?itemId=${itemId}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export {
  createStringValue,
  createCheckboxValue,
  createIntegerValue,
  getStringValues,
  getCheckboxValues,
  getIntegerValues,
  getItemStringFields,
  getItemIntegerFields,
  getItemCheckboxFields,
};
