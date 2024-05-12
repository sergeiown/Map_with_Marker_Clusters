/* Copyright (c) 2023-2024 Serhii I. Myshko
https://github.com/sergeiown/Map_with_Marker_Clusters/blob/main/LICENSE */

export async function getCompaniesData() {
    try {
        const response = await fetch('./json/companies.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading companies data:', error);
        return [];
    }
}
