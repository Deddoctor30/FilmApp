import img from './spinner.png'

const Spinner = () => {
    return (
        <div className="" role="status">
            <span>{img}</span>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;