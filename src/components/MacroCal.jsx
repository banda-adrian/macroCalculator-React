import React from 'react'

const MacroCal = () => {
    return (
        <div>

            <form>
                <h1>Macro Calculator</h1>

                <label>Age</label>
                <input type='number' name='age' placeholder='Enter your Age in years' />

                <div>
                    <label>Sex</label>
                    <input type='radio' /> <label>Male</label>
                    <input type='radio' name='sex' /> <label>Female</label>
                </div>
                <div>
                    <label>Weight (lbs)</label>
                    <input type="number" placeholder='Enter your weight in pounds' />
                </div>

                <div>
                    <label>Height (inches)</label>
                    <input type="number" placeholder='Enter your height in inches' />
                </div>

                <div>
                    <label>Activity Level</label>
                    <select>
                        <option>Select an Activity Level</option>
                        <option>Little to no exercise</option>
                        <option>Light exercise (1−3 days per week)</option>
                        <option>Moderate exercise (3−5 days per week)</option>
                        <option>Heavy exercise (6−7 days per week)</option>
                        <option>Very heavy exercise (twice per day, extra heavy workouts)</option>
                    </select>
                </div>

                <div>
                    <label>Choose Goal:</label>
                    <select>
                        <option>Select a Goal</option>
                        <option>Cut</option>
                        <option>Stay the Same Weight</option>
                        <option>Bulk</option>
                    </select>
                </div>

                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Calculate</button>
                </div>

            </form>
            
        </div>
    )
}

export default MacroCal