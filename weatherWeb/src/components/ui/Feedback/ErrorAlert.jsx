import Alert from '@mui/material/Alert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const ErrorAlert = ({ message }) =>{
    return(
        <div className='absolute w-dvw'>
            <Alert icon={<ReportProblemIcon fontSize="medium"/>} severity="warning">
                <p className='text-lg'>{message}</p>
            </Alert>
        </div>
    )
}

export default ErrorAlert;