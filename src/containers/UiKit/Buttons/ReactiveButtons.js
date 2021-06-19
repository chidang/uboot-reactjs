import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

const ReactiveButtons = () => {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  }

  return <>
    <div className="card">
      <div className="card-header">
        <h4 className="fw-700 m-0 fs-base">Reactive Buttons</h4>
      </div>
      <div className="card-body">
        <div className="bd-example">
          <div className="row">
            <div className="col-12">
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                idleText={'Primary'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn btn-primary'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'secondary'}
                idleText={'Secondary'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'dark'}
                idleText={'Dark'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'light'}
                idleText={'Light'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'yellow'}
                idleText={'Yellow'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'green'}
                idleText={'Green'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'teal'}
                idleText={'Teal'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'violet'}
                idleText={'Violet'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'btn'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'green'}
                idleText={'Green'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'rounded'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'red'}
                idleText={'Button'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'outline shadow'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <ReactiveButton
                buttonState={state}
                onClick={onClickHandler}
                color={'teal'}
                idleText={'Button'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                type={'button'}
                className={'outline rounded shadow'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'large'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ReactiveButtons;
