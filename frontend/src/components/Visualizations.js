import React from 'react';

function Visualizations() {
  return (
    <div className="container mt-5">
      <h2>Training Visualizations</h2>
      <div className='row'>
        <div className='col-md-6'>
          <img src='/Train_val_acc.png' alt='Acc' className='visualization' style={{ height: '90%' }}/>
        </div>
        <div className='col-md-6'>
          <img src='/Train_val_loss.png' alt='Loss' className='visualization'/>
        </div>
      </div>
      <img src='/Conf_matrix2.png' alt='Matrix' className='visualization' style={{ width: '60%' }}/>
    </div>
  );
}

export default Visualizations;