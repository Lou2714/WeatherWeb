import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const ErrorAlert = ({ message }) =>{
    return(
        <div className='relative w-full'>
            <Alert icon={<ReportProblemIcon fontSize="medium"/>} severity="warning">
                <p className='text-lg lg:text-2xl'>{message}</p>
            </Alert>
        </div>
    )
}

export default ErrorAlert;