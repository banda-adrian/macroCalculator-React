import React from 'react'

const MacroCal = () => {


    
    return (

        <div name='Macro Calculator' className='max-w-full h-full bg-[#F5F5F5]'>

            <div className='max-w-fit h-screen mx-auto px-8 flex flex-col justify-center'>

                <form className='border border-black rounded p-4 max-w-full m-auto relative'>

                    <h1 className='mb-4 text-2xl font-bold'>Macro Calculator</h1>
                    {/* Age */}
                    <div className='m-4'>
                        <label className='font-bold block'>Age</label>
                        <input className='border border-black rounded px-4 w-full h-10' type='number' name='age' placeholder='Enter your Age in years' />
                    </div>
                    {/* Sex */}
                    <div className='m-4'>
                        <label className='font-bold block '>Sex</label>
                        <input type='radio'/> <label>Male</label>
                        <input type='radio' name='sex' /> <label>Female</label>
                    </div>
                    {/* Weigth */}
                    <div className='m-4'>
                        <label className='font-bold block'>Weight (lbs)</label>
                        <input className='border border-black rounded px-4 w-full h-10' type="number" placeholder='Enter your weight in pounds' />
                    </div>
                    {/* Height */}
                    <div className='m-4'>
                        <label className='font-bold block'>Height (inches)</label>
                        <input className='border border-black rounded px-4 w-full h-10' type="number" placeholder='Enter your height in inches' />
                    </div>
                    {/* Activity Level */}
                    <div className='m-4'>
                        <label className='font-bold block'>Activity Level</label>
                        <select className='border border-black rounded px-4 w-full h-10'>
                            <option>Select an Activity Level</option>
                            <option>Little to no exercise</option>
                            <option>Light exercise (1−3 days per week)</option>
                            <option>Moderate exercise (3−5 days per week)</option>
                            <option>Heavy exercise (6−7 days per week)</option>
                            <option>Very heavy exercise (twice per day, extra heavy workouts)</option>
                        </select>
                    </div>
                    {/* Goal */}
                    <div className='m-4'>
                        <label className='font-bold block'>Choose Goal:</label>
                        <select className='border border-black rounded px-4 w-full h-10'>
                            <option>Select a Goal</option>
                            <option>Cut</option>
                            <option>Maintain</option>
                            <option>Bulk</option>
                        </select>
                    </div>

                    <div className='m-4'>
                        <button className='py-2 px-4' type="reset">Reset</button>
                        <button className='py-2 px-4' type="submit">Calculate</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default MacroCal