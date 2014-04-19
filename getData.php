<?php
$data = array(
    array(
        'testId'    => 1,
        'testName'  => 'Sample Test',
        'status'    => 'Complete',
        'questions' => array(
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            )
        )
    ),
    array(
        'testId'    => 2,
        'testName'  => 'Practice Exam',
        'status'    => 'Complete',
        'questions' => array(
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            )
        )
    ),
    array(
        'testId'    => 3,
        'testName'  => 'Final Exam',
        'status'    => 'Complete',
        'questions' => array(
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            )
        )
    ),
    array(
        'testId'    => 4,
        'testName'  => 'Practice Quiz',
        'status'    => 'InProgress',
        'questions' => array(
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            ),
            array(
                'questionId'   => 11,
                'questionText' => 'Where are you?'
            )
        )
    )
);
echo json_encode($data);