//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: main.cpp
//
// Code generated for Simulink model 'Simulink2Code'.
//
// Model version                  : 1.13
// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024
// C/C++ source code generated on : Mon Apr  7 20:57:27 2025
//
// Target selection: ert.tlc
// Embedded hardware selection: Apple->ARM64
// Code generation objectives: Unspecified
// Validation result: Not run
//
#include <stdio.h>         // This example main program uses printf/fflush
#include "Simulink2Code.h" // Model header file

static Simulink2Code Simulink2Code_Obj; // Instance of model class

//
// Associating rt_OneStep with a real-time clock or interrupt service routine
// is what makes the generated code "real-time".  The function rt_OneStep is
// always associated with the base rate of the model.  Subrates are managed
// by the base rate from inside the generated code.  Enabling/disabling
// interrupts and floating point context switches are target specific.  This
// example code indicates where these should take place relative to executing
// the generated code step function.  Overrun behavior should be tailored to
// your application needs.  This example simply sets an error status in the
// real-time model and returns from rt_OneStep.
//
void rt_OneStep(void);
void rt_OneStep(void)
{
  static boolean_T OverrunFlag{false};

  // Disable interrupts here

  // Check for overrun
  if (OverrunFlag)
  {
    Simulink2Code_Obj.getRTM()->setErrorStatus("Overrun");
    return;
  }

  OverrunFlag = true;

  // Save FPU context here (if necessary)
  // Re-enable timer or interrupt here
  // Set model inputs here

  // Step the model
  Simulink2Code_Obj.step();

  // Get model outputs here

  // Indicate task complete
  OverrunFlag = false;

  // Disable interrupts here
  // Restore FPU context here (if necessary)
  // Enable interrupts here
}

//
// The example main function illustrates what is required by your
// application code to initialize, execute, and terminate the generated code.
// Attaching rt_OneStep to a real-time clock is target specific. This example
// illustrates how you do this relative to initializing the model.
//
int_T main(int_T argc, const char *argv[])
{
  // Unused arguments
  (void)(argc);
  (void)(argv);

  // Initialize model
  Simulink2Code_Obj.initialize();

  double x[10] = {2,2,2,2,2,20,20,20,20,20};
  double y[10] = {1,1,1,1,1,10,10,10,10,10};

  for (int i = 0; i < 10; i++)
  {
    // Set input signals in steps
    Simulink2Code_Obj.Simulink2Code_U.x = x[i];
    Simulink2Code_Obj.Simulink2Code_U.y = y[i];

    // Perform a simulation step
    Simulink2Code_Obj.step();

    // Print the output of the current step
    double Ts = 1; // sampling time
    printf("at time %f, input (x, y): %f, %f; output (z): %f;\n", i * Ts, Simulink2Code_Obj.Simulink2Code_U.x, Simulink2Code_Obj.Simulink2Code_U.y, Simulink2Code_Obj.Simulink2Code_Y.result);
  }

  // Terminate model
  Simulink2Code_Obj.terminate();
  return 0;
}
