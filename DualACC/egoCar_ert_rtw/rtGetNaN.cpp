//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: rtGetNaN.cpp
//
// Code generated for Simulink model 'egoCar'.
//
// Model version                  : 1.6
// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024
// C/C++ source code generated on : Wed Jun 18 12:33:19 2025
//
// Target selection: ert.tlc
// Embedded hardware selection: Apple->ARM64
// Code generation objectives: Unspecified
// Validation result: Not run
//

#include "rtwtypes.h"

extern "C"
{

#include "rtGetNaN.h"

}

extern "C"
{
  // Return rtNaN needed by the generated code.
  real_T rtGetNaN(void)
  {
    return rtNaN;
  }

  // Return rtNaNF needed by the generated code.
  real32_T rtGetNaNF(void)
  {
    return rtNaNF;
  }
}

//
// File trailer for generated code.
//
// [EOF]
//
