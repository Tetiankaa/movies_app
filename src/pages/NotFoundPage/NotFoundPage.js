import css from './Notfound.module.css';
const NotFoundPage = () => {
    return (
        <div>
            <img src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" alt="page not found" className={css.Notfound}/>
        </div>
    );
};

export {NotFoundPage};