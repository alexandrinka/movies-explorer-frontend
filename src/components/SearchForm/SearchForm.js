import { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../utils/Validation';

export default function SearchForm({ onSubmit, savedMoviesPage, onCheckbox, isShortMovie }) {
    const { values, errors, isValid, setValues, handleChange, setIsValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(values.searchFilm);
    };

    useEffect(() => {
        if (!savedMoviesPage) {
            const input = localStorage.getItem('queryMovies');
            if (input) {
                setValues({ searchFilm: input });
                setIsValid(true);
            }
        }
    }, [savedMoviesPage, setValues, setIsValid]);

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                value={values.searchFilm || ''}
                onChange={handleChange}
                className={errors.searchFilm ? 'search__input search__input_type_error' : 'search__input'}
                name="searchFilm"
                placeholder='Фильм'
                required>
            </input>
            <button className="search__btn" type="submit" disabled={!isValid}></button>
            <span className={errors.searchFilm ? 'search__field-error_active' : ''}>
                {errors.searchFilm ? 'Нужно ввести ключевое слово' : ''}
            </span>
            <FilterCheckbox onCheckbox={onCheckbox} isShortMovie={isShortMovie} />
        </form>
    )
}