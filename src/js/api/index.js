const BASE_URL = "http://localhost:3000/api";

const HTTP_METHOD = {
  POST(data) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  },
  POST(data) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  },
};

const request = async (url, option) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert("에러가 발생했습니다.");
    console.error("에러 발생");
  }
  return response.json();
};

const MenuApi = {
  async getAllMenuByCategory(category) {
    return request(`${BASE_URL}/category/${category}/menu`);
  },

  async createMenu(category, name) {
    return request(
      `${BASE_URL}/category/${category}/menu`,
      HTTP_METHOD.POST({ name })
    );
  },

  async updateMenu(category, name, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    if (!response.ok) {
      alert("에러가 발생했습니다.");
      console.error("에러 발생");
    }
    return response.json();
  },

  async toggleSoldOutMenu(category, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      {
        method: "PUT",
      }
    );
    if (!response.ok) {
      alert("에러가 발생했습니다.");
      console.error("에러 발생");
    }
  },

  async deleteMenu(category, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      alert("에러가 발생했습니다.");
      console.error("에러 발생");
    }
  },
};

export default MenuApi;
