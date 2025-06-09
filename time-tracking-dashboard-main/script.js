document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const daily_stats =  document.querySelectorAll('.daily_stats')
    const weekly_stats =  document.querySelectorAll('.weekly_stats')
    const monthly_stats =  document.querySelectorAll('.monthly_stats')

    const daily_btn =  document.querySelector('.daily_btn')
    const weekly_btn =  document.querySelector('.weekly_btn')
    const monthly_btn =  document.querySelector('.monthly_btn')

    // Handle daily Button clicked 
    daily_btn.addEventListener('click', function(){
        daily_stats.forEach(daily => {
            daily.classList.remove('hidden')
        })
        weekly_stats.forEach(weekly => {
            weekly.classList.add('hidden')
        })
        monthly_stats.forEach(monthly => {
            monthly.classList.add('hidden')
        })
    })
    // Handle weekly Button clicked 
    weekly_btn.addEventListener('click', function(){
        weekly_stats.forEach(weekly => {
            weekly.classList.remove('hidden')
            weekly.classList.add('show')
        })
        daily_stats.forEach(daily => {
            daily.classList.add('hidden')
        })
        monthly_stats.forEach(monthly => {
            monthly.classList.add('hidden')
        })
    })
    // Handle monthly Button clicked 
    monthly_btn.addEventListener('click', function(){
        monthly_stats.forEach(monthly => {
            monthly.classList.remove('hidden')
            monthly.classList.add('show')

        })
        weekly_stats.forEach(weekly => {
            weekly.classList.add('hidden')
        })
        daily_stats.forEach(daily => {
            daily.classList.add('hidden')
        })
    })

})