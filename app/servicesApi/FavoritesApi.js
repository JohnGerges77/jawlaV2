import axios from "axios";

// ✅ جلب التوكن من LocalStorage لاستخدامه في الطلبات
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); 

  // 🔹 احصل على التوكن المخزن
  return {
    headers: { Authorization: `Bearer ${token}` }, // ✅ تمرير التوكن في الهيدر
  };
};

// ✅ إضافة رحلة إلى المفضلة
export const addToFavorites = async (tripId) => {
  console.log("Trip ID being sent:", tripId); // ✅ تحقق من أنه ليس undefined
  try {
    const response = await axios.post(
      `https://aldeeb.runasp.net/api/Favorite/add/${tripId}`,
      {}, // ✅ تأكد أن API لا تحتاج بيانات أخرى
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to favorites:", error.response?.data || error);
    throw error;
  }
};


export const removeFromFavorites = async (tripId) => {
  try {
    const response = await axios.delete(
      `https://aldeeb.runasp.net/api/Favorite/remove/${tripId}`,
      getAuthHeaders() 
    );
    return response.data;
  } catch (error) {
    console.error("Error removing from favorites:", error);
    throw error;
  }
};

// ✅ جلب الرحلات المفضلة
export const getFavorites = async () => {
  try {
    const response = await axios.get(`https://aldeeb.runasp.net/api/Favorite/list`, getAuthHeaders());
   

   
    return response.data?.favorites || [];
  } catch (error) {
    console.error("Error fetching favorite trips:", error);
    return []; // ✅ إرجاع مصفوفة فارغة عند الفشل
  }
};
