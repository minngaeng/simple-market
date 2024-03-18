import { useEffect, useState } from 'react';
import { getCategories } from '../api/categories';
import { Category } from '../types';

/*  NOTE: Dummy API 호출을 통해 카테고리 목록을 가져오는 훅입니다.
 *  내용에 중복이 있더라도 그대로 사용해 주세요.
 */
export const useGetCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getCategories()
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error getting categories', error);
                setError(true);
                setLoading(false);
            });
    }, []);

    return { categories, loading, error };
};
