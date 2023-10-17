import useFetch from "../hooks/useFetch";

const OurSchool = () => {
    const { data, isPending, error } = useFetch('https://divine-treasue-school.onrender.com/api/v1/school_data')

    return (
        <>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}

            {data && (<div className="our-school">
                <h2>Our School</h2>
                <p>In a glance</p>

                <div className="our-school-content">
                    {data.map((data) => (
                        <div className="our-school-content" key={data.id}>
                            <div>
                                <h2>{data.teacher}</h2>
                                <p>Certified Teachers</p>
                            </div>

                            <div>
                                <h2>{data.number}</h2>
                                <p>Schools</p>
                            </div>

                            <div>
                                <h2>{data.pass_rate}</h2>
                                <p>Passing to Universities</p>
                            </div>

                            <div>
                                <h2>{data.years}</h2>
                                <p>Years Old</p>
                            </div>

                            <div>
                                <h2>{data.students}</h2>
                                <p>Students Enrolled To Date</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>)}
        </>
    );
}

export default OurSchool;