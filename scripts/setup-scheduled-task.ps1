# Define the task parameters
$taskName = "CollegeCounselAIGeneration"
$scriptPath = "$PSScriptRoot\run-ai-generation.bat"

# Define the trigger to run 4 times a day (12 AM, 6 AM, 12 PM, 6 PM)
$trigger1 = New-ScheduledTaskTrigger -Daily -At "12:00AM"
$trigger2 = New-ScheduledTaskTrigger -Daily -At "6:00AM"
$trigger3 = New-ScheduledTaskTrigger -Daily -At "12:00PM"
$trigger4 = New-ScheduledTaskTrigger -Daily -At "6:00PM"

# Create the action
$action = New-ScheduledTaskAction -Execute $scriptPath -WorkingDirectory $PSScriptRoot

# Create the task settings
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopOnIdleEnd -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries

# Register the task
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger1, $trigger2, $trigger3, $trigger4 -Settings $settings -Description "Runs AI generation for College Counsel 4 times daily" -Force

Write-Host "Scheduled task '$taskName' has been created successfully."
Write-Host "It will run at 12 AM, 6 AM, 12 PM, and 6 PM daily."
Write-Host "Script path: $scriptPath"
