const API_URL = "http://localhost:8000/api";

export async function apiRequest(endpoint, method="GET", data = null, token =null){
    const headers = {
        "Content-type":"application/json"
    };
    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    });
    
    if (response.status === 204) return null

    if(!response.ok){
        throw new Error("Erreur d'API");
    }

    return response.json();
}