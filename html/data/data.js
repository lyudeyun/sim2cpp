var dataJson = {"arch":{"ispc":false,"isunix":true,"ismac":true},"build":"Simulink2Code","ref":false,"files":[{"name":"ert_main.cpp","type":"source","group":"main","path":"/Users/ldy/git/Simulink2Code_ert_rtw","tag":"","groupDisplay":"Main file","code":"//\n// Academic License - for use in teaching, academic research, and meeting\n// course requirements at degree granting institutions only.  Not for\n// government, commercial, or other organizational use.\n//\n// File: ert_main.cpp\n//\n// Code generated for Simulink model 'Simulink2Code'.\n//\n// Model version                  : 1.13\n// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024\n// C/C++ source code generated on : Mon Apr  7 20:57:27 2025\n//\n// Target selection: ert.tlc\n// Embedded hardware selection: Apple->ARM64\n// Code generation objectives: Unspecified\n// Validation result: Not run\n//\n#include <stdio.h>              // This example main program uses printf/fflush\n#include \"Simulink2Code.h\"             // Model header file\n\nstatic myPlus rtObj;                   // Instance of model class\n\n//\n// Associating rt_OneStep with a real-time clock or interrupt service routine\n// is what makes the generated code \"real-time\".  The function rt_OneStep is\n// always associated with the base rate of the model.  Subrates are managed\n// by the base rate from inside the generated code.  Enabling/disabling\n// interrupts and floating point context switches are target specific.  This\n// example code indicates where these should take place relative to executing\n// the generated code step function.  Overrun behavior should be tailored to\n// your application needs.  This example simply sets an error status in the\n// real-time model and returns from rt_OneStep.\n//\nvoid rt_OneStep(void);\nvoid rt_OneStep(void)\n{\n  static boolean_T OverrunFlag{ false };\n\n  // Disable interrupts here\n\n  // Check for overrun\n  if (OverrunFlag) {\n    rtObj.getRTM()->setErrorStatus(\"Overrun\");\n    return;\n  }\n\n  OverrunFlag = true;\n\n  // Save FPU context here (if necessary)\n  // Re-enable timer or interrupt here\n  // Set model inputs here\n\n  // Step the model\n  rtObj.step();\n\n  // Get model outputs here\n\n  // Indicate task complete\n  OverrunFlag = false;\n\n  // Disable interrupts here\n  // Restore FPU context here (if necessary)\n  // Enable interrupts here\n}\n\n//\n// The example main function illustrates what is required by your\n// application code to initialize, execute, and terminate the generated code.\n// Attaching rt_OneStep to a real-time clock is target specific. This example\n// illustrates how you do this relative to initializing the model.\n//\nint_T main(int_T argc, const char *argv[])\n{\n  // Unused arguments\n  (void)(argc);\n  (void)(argv);\n\n  // Initialize model\n  rtObj.initialize();\n\n  // Attach rt_OneStep to a timer or interrupt service routine with\n  //  period 1.0 seconds (base rate of the model) here.\n  //  The call syntax for rt_OneStep is\n  //\n  //   rt_OneStep();\n\n  printf(\"Warning: The simulation will run forever. \"\n         \"Generated ERT main won't simulate model step behavior. \"\n         \"To change this behavior select the 'MAT-file logging' option.\\n\");\n  fflush((nullptr));\n  while (rtObj.getRTM()->getErrorStatus() == (nullptr)) {\n    //  Perform application tasks here\n  }\n\n  // Terminate model\n  rtObj.terminate();\n  return 0;\n}\n\n//\n// File trailer for generated code.\n//\n// [EOF]\n//\n"},{"name":"Simulink2Code.cpp","type":"source","group":"model","path":"/Users/ldy/git/Simulink2Code_ert_rtw","tag":"","groupDisplay":"Model files","code":"//\n// Academic License - for use in teaching, academic research, and meeting\n// course requirements at degree granting institutions only.  Not for\n// government, commercial, or other organizational use.\n//\n// File: Simulink2Code.cpp\n//\n// Code generated for Simulink model 'Simulink2Code'.\n//\n// Model version                  : 1.13\n// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024\n// C/C++ source code generated on : Mon Apr  7 20:57:27 2025\n//\n// Target selection: ert.tlc\n// Embedded hardware selection: Apple->ARM64\n// Code generation objectives: Unspecified\n// Validation result: Not run\n//\n#include \"Simulink2Code.h\"\n\n// Model step function\nvoid myPlus::step()\n{\n  // Outport: '<Root>/result' incorporates:\n  //   Inport: '<Root>/x'\n  //   Inport: '<Root>/y'\n  //   Sum: '<Root>/Plus'\n\n  rtY.result = rtU.x + rtU.y;\n}\n\n// Model initialize function\nvoid myPlus::initialize()\n{\n  // (no initialization code required)\n}\n\n// Model terminate function\nvoid myPlus::terminate()\n{\n  // (no terminate code required)\n}\n\nconst char_T* myPlus::RT_MODEL::getErrorStatus() const\n{\n  return (errorStatus);\n}\n\nvoid myPlus::RT_MODEL::setErrorStatus(const char_T* const volatile aErrorStatus)\n{\n  (errorStatus = aErrorStatus);\n}\n\n// Constructor\nmyPlus::myPlus() :\n  rtU(),\n  rtY(),\n  rtM()\n{\n  // Currently there is no constructor body generated.\n}\n\n// Destructor\n// Currently there is no destructor body generated.\nmyPlus::~myPlus() = default;\n\n// Real-Time Model get method\nmyPlus::RT_MODEL * myPlus::getRTM()\n{\n  return (&rtM);\n}\n\n//\n// File trailer for generated code.\n//\n// [EOF]\n//\n"},{"name":"Simulink2Code.h","type":"header","group":"model","path":"/Users/ldy/git/Simulink2Code_ert_rtw","tag":"","groupDisplay":"Model files","code":"//\n// Academic License - for use in teaching, academic research, and meeting\n// course requirements at degree granting institutions only.  Not for\n// government, commercial, or other organizational use.\n//\n// File: Simulink2Code.h\n//\n// Code generated for Simulink model 'Simulink2Code'.\n//\n// Model version                  : 1.13\n// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024\n// C/C++ source code generated on : Mon Apr  7 20:57:27 2025\n//\n// Target selection: ert.tlc\n// Embedded hardware selection: Apple->ARM64\n// Code generation objectives: Unspecified\n// Validation result: Not run\n//\n#ifndef Simulink2Code_h_\n#define Simulink2Code_h_\n#include <cmath>\n#include \"rtwtypes.h\"\n#include \"Simulink2Code_types.h\"\n\n// Class declaration for model Simulink2Code\nclass myPlus final\n{\n  // public data and function members\n public:\n  // External inputs (root inport signals with default storage)\n  struct ExtU {\n    real_T x;                          // '<Root>/x'\n    real_T y;                          // '<Root>/y'\n  };\n\n  // External outputs (root outports fed by signals with default storage)\n  struct ExtY {\n    real_T result;                     // '<Root>/result'\n  };\n\n  // Real-time Model Data Structure\n  struct RT_MODEL {\n    const char_T * volatile errorStatus;\n    const char_T* getErrorStatus() const;\n    void setErrorStatus(const char_T* const volatile aErrorStatus);\n  };\n\n  // Copy Constructor\n  myPlus(myPlus const&) = delete;\n\n  // Assignment Operator\n  myPlus& operator= (myPlus const&) & = delete;\n\n  // Move Constructor\n  myPlus(myPlus &&) = delete;\n\n  // Move Assignment Operator\n  myPlus& operator= (myPlus &&) = delete;\n\n  // Real-Time Model get method\n  myPlus::RT_MODEL * getRTM();\n\n  // External inputs\n  ExtU rtU;\n\n  // External outputs\n  ExtY rtY;\n\n  // model initialize function\n  static void initialize();\n\n  // model step function\n  void step();\n\n  // model terminate function\n  static void terminate();\n\n  // Constructor\n  myPlus();\n\n  // Destructor\n  ~myPlus();\n\n  // private data and function members\n private:\n  // Real-Time Model\n  RT_MODEL rtM;\n};\n\n//-\n//  The generated code includes comments that allow you to trace directly\n//  back to the appropriate location in the model.  The basic format\n//  is <system>/block_name, where system is the system number (uniquely\n//  assigned by Simulink) and block_name is the name of the block.\n//\n//  Use the MATLAB hilite_system command to trace the generated code back\n//  to the model.  For example,\n//\n//  hilite_system('<S3>')    - opens system 3\n//  hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3\n//\n//  Here is the system hierarchy for this model\n//\n//  '<Root>' : 'Simulink2Code'\n\n#endif                                 // Simulink2Code_h_\n\n//\n// File trailer for generated code.\n//\n// [EOF]\n//\n"},{"name":"Simulink2Code_private.h","type":"header","group":"model","path":"/Users/ldy/git/Simulink2Code_ert_rtw","tag":"","groupDisplay":"Model files","code":"//\n// Academic License - for use in teaching, academic research, and meeting\n// course requirements at degree granting institutions only.  Not for\n// government, commercial, or other organizational use.\n//\n// File: Simulink2Code_private.h\n//\n// Code generated for Simulink model 'Simulink2Code'.\n//\n// Model version                  : 1.13\n// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024\n// C/C++ source code generated on : Mon Apr  7 20:57:27 2025\n//\n// Target selection: ert.tlc\n// Embedded hardware selection: Apple->ARM64\n// Code generation objectives: Unspecified\n// Validation result: Not run\n//\n#ifndef Simulink2Code_private_h_\n#define Simulink2Code_private_h_\n#include \"rtwtypes.h\"\n#include \"Simulink2Code_types.h\"\n#endif                                 // Simulink2Code_private_h_\n\n//\n// File trailer for generated code.\n//\n// [EOF]\n//\n"},{"name":"Simulink2Code_types.h","type":"header","group":"model","path":"/Users/ldy/git/Simulink2Code_ert_rtw","tag":"","groupDisplay":"Model files","code":"//\n// Academic License - for use in teaching, academic research, and meeting\n// course requirements at degree granting institutions only.  Not for\n// government, commercial, or other organizational use.\n//\n// File: Simulink2Code_types.h\n//\n// Code generated for Simulink model 'Simulink2Code'.\n//\n// Model version                  : 1.13\n// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024\n// C/C++ source code generated on : Mon Apr  7 20:57:27 2025\n//\n// Target selection: ert.tlc\n// Embedded hardware selection: Apple->ARM64\n// Code generation objectives: Unspecified\n// Validation result: Not run\n//\n#ifndef Simulink2Code_types_h_\n#define Simulink2Code_types_h_\n#endif                                 // Simulink2Code_types_h_\n\n//\n// File trailer for generated code.\n//\n// [EOF]\n//\n"},{"name":"rtwtypes.h","type":"header","group":"utility","path":"/Users/ldy/git/Simulink2Code_ert_rtw","tag":"","groupDisplay":"Utility files","code":"//\n// Academic License - for use in teaching, academic research, and meeting\n// course requirements at degree granting institutions only.  Not for\n// government, commercial, or other organizational use.\n//\n// File: rtwtypes.h\n//\n// Code generated for Simulink model 'Simulink2Code'.\n//\n// Model version                  : 1.13\n// Simulink Coder version         : 24.2 (R2024b) 21-Jun-2024\n// C/C++ source code generated on : Mon Apr  7 20:57:27 2025\n//\n// Target selection: ert.tlc\n// Embedded hardware selection: Apple->ARM64\n// Code generation objectives: Unspecified\n// Validation result: Not run\n//\n\n#ifndef RTWTYPES_H\n#define RTWTYPES_H\n\n// Logical type definitions\n#if (!defined(__cplusplus))\n#ifndef false\n#define false                          (0U)\n#endif\n\n#ifndef true\n#define true                           (1U)\n#endif\n#endif\n\n//=======================================================================*\n//  Target hardware information\n//    Device type: Apple->ARM64\n//    Number of bits:     char:   8    short:   16    int:  32\n//                        long:  64    long long:  64\n//                        native word size:  64\n//    Byte ordering: LittleEndian\n//    Signed integer division rounds to: Zero\n//    Shift right on a signed integer as arithmetic shift: on\n// =======================================================================\n\n//=======================================================================*\n//  Fixed width word size data types:                                     *\n//    int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\n//    uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\n//    real32_T, real64_T           - 32 and 64 bit floating point numbers *\n// =======================================================================\ntypedef signed char int8_T;\ntypedef unsigned char uint8_T;\ntypedef short int16_T;\ntypedef unsigned short uint16_T;\ntypedef int int32_T;\ntypedef unsigned int uint32_T;\ntypedef long int64_T;\ntypedef unsigned long uint64_T;\ntypedef float real32_T;\ntypedef double real64_T;\n\n//===========================================================================*\n//  Generic type definitions: boolean_T, char_T, byte_T, int_T, uint_T,       *\n//                            real_T, time_T, ulong_T, ulonglong_T.           *\n// ===========================================================================\ntypedef double real_T;\ntypedef double time_T;\ntypedef unsigned char boolean_T;\ntypedef int int_T;\ntypedef unsigned int uint_T;\ntypedef unsigned long ulong_T;\ntypedef unsigned long long ulonglong_T;\ntypedef char char_T;\ntypedef unsigned char uchar_T;\ntypedef char_T byte_T;\n\n//===========================================================================*\n//  Complex number type definitions                                           *\n// ===========================================================================\n#define CREAL_T\n\ntypedef struct {\n  real32_T re;\n  real32_T im;\n} creal32_T;\n\ntypedef struct {\n  real64_T re;\n  real64_T im;\n} creal64_T;\n\ntypedef struct {\n  real_T re;\n  real_T im;\n} creal_T;\n\n#define CINT8_T\n\ntypedef struct {\n  int8_T re;\n  int8_T im;\n} cint8_T;\n\n#define CUINT8_T\n\ntypedef struct {\n  uint8_T re;\n  uint8_T im;\n} cuint8_T;\n\n#define CINT16_T\n\ntypedef struct {\n  int16_T re;\n  int16_T im;\n} cint16_T;\n\n#define CUINT16_T\n\ntypedef struct {\n  uint16_T re;\n  uint16_T im;\n} cuint16_T;\n\n#define CINT32_T\n\ntypedef struct {\n  int32_T re;\n  int32_T im;\n} cint32_T;\n\n#define CUINT32_T\n\ntypedef struct {\n  uint32_T re;\n  uint32_T im;\n} cuint32_T;\n\n#define CINT64_T\n\ntypedef struct {\n  int64_T re;\n  int64_T im;\n} cint64_T;\n\n#define CUINT64_T\n\ntypedef struct {\n  uint64_T re;\n  uint64_T im;\n} cuint64_T;\n\n//=======================================================================*\n//  Min and Max:                                                          *\n//    int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\n//    uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\n// =======================================================================\n#define MAX_int8_T                     ((int8_T)(127))\n#define MIN_int8_T                     ((int8_T)(-128))\n#define MAX_uint8_T                    ((uint8_T)(255U))\n#define MAX_int16_T                    ((int16_T)(32767))\n#define MIN_int16_T                    ((int16_T)(-32768))\n#define MAX_uint16_T                   ((uint16_T)(65535U))\n#define MAX_int32_T                    ((int32_T)(2147483647))\n#define MIN_int32_T                    ((int32_T)(-2147483647-1))\n#define MAX_uint32_T                   ((uint32_T)(0xFFFFFFFFU))\n#define MAX_int64_T                    ((int64_T)(9223372036854775807L))\n#define MIN_int64_T                    ((int64_T)(-9223372036854775807L-1L))\n#define MAX_uint64_T                   ((uint64_T)(0xFFFFFFFFFFFFFFFFUL))\n\n// Block D-Work pointer type\ntypedef void * pointer_T;\n\n#endif                                 // RTWTYPES_H\n\n//\n// File trailer for generated code.\n//\n// [EOF]\n//\n"}],"coverage":[{"id":"SimulinkCoverage","name":"Simulink Coverage","files":[]},{"id":"Bullseye","name":"Bullseye Coverage","files":[]},{"id":"LDRA","name":"LDRA Testbed","files":[]}],"features":{"annotation":false,"coverage":true,"profiling":true,"tooltip":true,"coverageTooltip":true,"showJustificationLinks":true,"useMWTable":false,"showProfilingInfo":true,"showTaskSummary":true,"showProtectedV2Report":true}};