import Job from "../model/job.js"



export const saveJobData = async(request,response)=>{
    try {
        const newJob = new Job(request.body);
        await newJob.save();
        response.status(200).json({ message: 'job saved successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ error: error.message})
    }
}